// HTML 문서가 완전히 로드된 후 실행되도록 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function() {

    // 1. 카드 뒤집기 인터랙션 구현
    const quizCard = document.getElementById("quizCard");

    if (quizCard) {
        // 카드를 클릭했을 때 실행할 함수
        quizCard.addEventListener("click", function() {
            // 'flipped' 클래스가 있으면 제거하고, 없으면 추가함 (토글 기능)
            quizCard.classList.toggle("flipped");
        });
    }

    // 2. 좋아요 카운터 인터랙션 구현
    const likeBtn = document.getElementById("likeBtn");
    const likeCount = document.getElementById("likeCount");
    let count = 0; // 초기 좋아요 숫자

    if (likeBtn && likeCount) {
        // 버튼을 클릭했을 때 실행할 함수
        likeBtn.addEventListener("click", function() {
            count++; // 카운트 1 증가
            likeCount.textContent = count; // 화면에 바뀐 숫자 업데이트
            
            // 시각적 피드백을 위해 버튼에 잠시 효과 주기
            likeBtn.style.backgroundColor = "#ffeaa7";
            setTimeout(function() {
                likeBtn.style.backgroundColor = "#ffffff";
            }, 200);
        });
    }
});