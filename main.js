import {alignment_sequence} from './source/calc.js';
import {dna} from './source/dna.js';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import jsdom from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//let app = express();
var app = express()

app.get('/', function (req, res) {
res.sendFile(__dirname + '/public/index.html');
})
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/result_dna', function(req, res) {
    let lseq1 = [...req.body.dseq1];
    let lseq2 = [...req.body.dseq2];
    //console.log(dna(req.body.dseq1, req.body.dseq2, lseq1, lseq2, req.body.gap_score, req.body.match_score, req.body.mismatch_score))
    let sent = `Sequence 1 | ${req.body.dseq1} <br>`;
    sent += `Sequence 2 | ${req.body.dseq2} <br>`;
    sent += `gap score | ${req.body.gap_score}<br>`;
    sent += `match score | ${req.body.match_score}<br>`;
    sent += `mismatch score | ${req.body.mismatch_score}<br>`;
    let res1 = dna(req.body.dseq1, req.body.dseq2, lseq1, lseq2, req.body.gap_score, req.body.match_score, req.body.mismatch_score)[0].join(" ");
    let res2 = dna(req.body.dseq1, req.body.dseq2, lseq1, lseq2, req.body.gap_score, req.body.match_score, req.body.mismatch_score)[1].join(" ");
    res.send("<h1> Result </h1>" + sent + "<br>" + res1 + "<br>" + res2)

})
// app.listen(3000);


app.post('/result_protein', function(req, res) {
    let lseq1 = [...req.body.pseq1];
    let lseq2 = [...req.body.pseq2];
    const score_list = [];
    let best_score = [-1, -100000];
    for (let i = 0; i < 8; i++){
      score_list.push(alignment_sequence(req.body.pseq1, req.body.pseq2, lseq1, lseq2, req.body.gap_opening, req.body.gap_extension, i)[2]);
      if (alignment_sequence(req.body.pseq1, req.body.pseq2, lseq1, lseq2, req.body.gap_opening, req.body.gap_extension, i)[2] >= best_score[1]){
        best_score[1] = alignment_sequence(req.body.pseq1, req.body.pseq2, lseq1, lseq2, req.body.gap_opening, req.body.gap_extension, i)[2];
        best_score[0] = i;
      } 
    }
    let sent = `Sequence 1 | ${req.body.pseq1} <br>`;
    //console.log(sent)
    sent += `Sequence 2 | ${req.body.pseq2} <br>`;
    sent += `gap opening | ${req.body.gap_opening}<br>`;
    sent += `gap extension | ${req.body.gap_extension}<br>`;

    let res1 = alignment_sequence(req.body.pseq1, req.body.pseq2, lseq1, lseq2, req.body.gap_opening, req.body.gap_extension, best_score[0])[0].join(" ");
    let res2 = alignment_sequence(req.body.pseq1, req.body.pseq2, lseq1, lseq2, req.body.gap_opening, req.body.gap_extension, best_score[0])[1].join(" ");
    res.send("<h1> Result </h1>" + sent + "<br>" + res1 + "<br>" + res2)
    // const html = fs.readFileSync( __dirname + '/public/result.html' );
    // const dom = new jsdom.JSDOM((html.toString()).replace(/ /gi,""));
    // const options = {
    //   resources: 'usable',
    //   runScripts: 'dangerously',
    // };
    // jsdom.JSDOM.fromFile( __dirname + '/public/result.html', options).then((dom) => {
    //   console.log(dom.window.document.body.textContent.trim());
    //   console.log(dom.window.document.querySelector('section').innerHTML);
    //   dom.window.document.querySelector("section").innerHTML = "hi";
    //   const html = fs.readFileSync( __dirname + '/public/result.html' );
    //   console.log((html.toString()));
  
    //   // fs.writeFile(__dirname + '/public/result.html', dom.window.document, 'utf8', function(error){
    //   //   console.log('write end')
    //   // });
    //   //res.sendFile(__dirname + '/public/result.html');
    // }).then(() => {
    //   console.log('bye')
    //   res.sendFile(__dirname + '/public/result.html')});
        //console.log(dom.window.document.querySelector("result")) //.querySelector("#result"))
    //res.sendFile(__dirname + '/public/index.html');
    //res.send("<h1> Result </h1>" + "best score : "+best_score[1] +"<br>" + sent + "<br>" + res1 + "<br>" + res2 )
    
  })

// // listen 함수로 3000 포트에 서버를 실행한다.
app.listen(3000, function(){
  console.log("server is running.")
});


