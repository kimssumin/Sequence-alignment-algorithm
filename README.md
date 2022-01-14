# <b>Sequence alignment algorithm의 구현(Dynamic programming)</b>

## <b>1. Motivation and Objective</b>

> ### <b>A. Motivation</b>
>
> 1. NGS(Next-Generation Sequencing) 기술이 발전하며 유전정보 해석에 필요한 시간과 노력이 많이 감소되었다. 이와 더불어 최적의 sequence alignment를 찾는 것의 중요성 또한 강조되고 있다.
> 2. Sequence alignments분석의 목적은 관심 있는 서열의 유사성과 차이점을 분석하여 염기와 아미노산 수준에서 서열간의 구조적, 기능적 및 진화론적 관련성을 추론하는 것에 있다.

> ### <b>B. Objective</b>

> 1. Dynamic programming을 통해 임의의 두 sequence를 입력으로 넣으면 최적의 alignment를 찾아내는 알고리즘을 구현하고, 사용자로 하여금 결과와 사용된 알고리즘 정보를 같이 표현해 주는 등 직관적인 인터페이스를 만드는 것을 목적으로 한다.
>2. 구현한 알고리즘을 바탕으로 공통된 유전자 부분이 병변이나 형질에 영향을 주는 경우가 있는지를 조사하여, 이 또한 함께 출력해 진화론적 관련성 또한 추론해 볼 수 있도록 한다.

## <b>2. Related Work and Methods</b>

>- Sequence alignment 관련 methods, models, concepts, and strategies (서적과 논문 활용)
  http://delab.yonsei.ac.kr/assets/files/publication/legacy/Graph Sequence Alignment Using a Distributed System.pdf
  http://www.koreascience.kr/article/JAKO200508824135995.kr
  http://multalin.toulouse.inra.fr/multalin/multalin.html
  (Alignment program + Macvector, Vector NTI, clustalx)
  2

## <b>3. Proposed work</b>

- Dynamic programming을 통해 sequence alignment를 구현한다. 두 임의의 sequence가 입력으로 들어가면 여러 substitution matrix를 사용하여 자동으로 결과를 비교하고, 최적의 모델을 통해 산출된 score와 gap score, 그리고 alignment 결과를 출력한다.
- 최종적인 결과물을 웹 프로그래밍을 통해 웹에서 사용자들이 편하게 이용할 수 있도록 인터페이스를 구축한다.

## <b>4. Evaluation</b>

- Evaluation method: 이미Sequence분석 결과가 나와있는 서열들을 직접 구현한 코드에 넣어보고 최적의 결과를 찾아내는지 확인한다.
