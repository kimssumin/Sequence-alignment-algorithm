
const dna_ = document.querySelector("#dna");
const protein_ = document.querySelector("#protein");
const result = document.querySelector("#result");

protein_.style.display = "none";
dna_.style.display = "none";
result.style.display = "none";



function d_begin(){
  document.getElementById("result").innerHTML = "";
  protein_.style.display = "none";
  dna_.style.display = "block";
}

function p_begin(){
  document.getElementById("result").innerHTML = "";
  dna_.style.display = "none";
  protein_.style.display = "block";
}

function d_input(){
  const dseq1 = document.getElementById('dseq1').value;
  const dseq2 = document.getElementById('dseq2').value;
  const gap_score = document.getElementById('gap_score').value;
  const match_score = document.getElementById('match_score').value;
  const mismatch_score = document.getElementById('mismatch_score').value;
  
  //화면에 표시

  let sent = `Sequence 1 | ${dseq1} <br>`;
  //console.log(sent)
  sent += `Sequence 2 | ${dseq2} <br>`;
  sent += `gap score | ${gap_score}<br>`;
  sent += `match score | ${match_score}<br>`;
  sent += `mismatch score | ${mismatch_score}<br>`;
  let lseq1 = [...dseq1];
  let lseq2 = [...dseq2];

  // let dna_answer = dna(dseq1, dseq2, lseq1, lseq2, gap_score, match_score, mismatch_score)
  // console.log(dna_answer)
  // sent += `Answer | ${dna_answer}`;

  document.getElementById("result").innerHTML = sent
  
  result.style.display = "block";
}

function p_input(){
  

  const pseq1 = document.getElementById('pseq1').value;
  const pseq2 = document.getElementById('pseq2').value;
  const gap_opening = document.getElementById('gap_opening').value;
  const gap_extension = document.getElementById('gap_extension').value;

  //화면에 표시

  let sent = `Sequence 1 | ${pseq1} <br>`;
  //console.log(sent)
  sent += `Sequence 2 | ${pseq2} <br>`;
  sent += `gap opening | ${gap_opening}<br>`;
  sent += `gap extension | ${gap_extension}<br>`;

  document.getElementById("result").innerHTML = sent;
  console.log(sent)
  
  result.style.display = "block";
}

