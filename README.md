<h1>Soldier Challengers</h1>
<h3>🙋‍♂️ '솔저 챌린저스'는</h3>
성공적인 전역을 위한 챌린지 플랫폼 입니다.
솔저챌린지하고 군생활을 알차게!

<h3>🪖 솔저챌린저스 url</h3>
url : https://soldierchallengers.com/<br />
notion : https://www.notion.so/9bcf0f86055e4ccdb3e8cdd7ab811a03

<h3>🧑‍💻 개발기간</h3>
2022.04.22 ~ 2022.06.02<br />
FrontEnd : 한유정, 이성영 (React)<br />
BackEnd : 황인호, 김태균, 정대규 (Node js)<br />
Designer : 하혜림, 이홀린

<h3>📊 사용 기술 스택</h3>
Framework : React<br />
상태관리 : Redux<br />
CSS : Styled-component<br />
API:Axios<br />
CD:Amplify

<h3>🛠 사용 Tool</h3>
VSCode<br />
Git<br />
AWS-Route53, Amplify

<h3>⚙️ 트러블 슈팅</h3>
1. 소셜로그인을 했을 때, 유저 추가정보를 입력받지 못해 메인화면에서 노출시킬 data를 찾지 못했던 문제<br />
→ 소셜로그인 직후 추가정보를 입력할 수 있도록 라우팅하여 추가정보를 필수로 입력하도록 유도한 후 에러가 해결됨<br />
2. Nav 바에서, onClick 후 렌더링이 되더라도 nav바 색을 유지시키려했으나 로딩에 시간이 걸리는 문제<br />
→변한 값이 유지되게 하기 위해 db에 data를 입력하여 nav바 색 유지를 시킴. 프론트단에서 nav색상을<br />
url주소에 따라 변경시킨 후 렌더링이 되더라도 유지시켜 문제를 해결하고 페이지 로딩 효율을 높임<br />
3. 렌더링 직후 새로고침 시 data가 날아가는 문제<br />
→ useEffect의 의존성배열을 제거하여 지속적 호출을 유도함으로 해결
