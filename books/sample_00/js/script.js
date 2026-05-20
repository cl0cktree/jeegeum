// 🚀 [자바스크립트 로딩 후 실행되는 메인 함수]
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================
    // ✨ 기능 1: 퀴즈 결과 표시 및 버튼 관리
    // ==========================================================
    const revealButton = document.getElementById('revealButton');
    const quizResult = document.getElementById('quizResult');
    const resultText = document.getElementById('resultText');
    const restartButton = document.getElementById('restartButton');

    // 퀴즈 버튼 클릭 이벤트 리스너 추가
    revealButton.addEventListener('click', revealAnswer);

    // 재시작 버튼 클릭 이벤트 리스너 추가
    restartButton.addEventListener('click', resetQuiz);

    /**
     * @function revealAnswer
     * 주어진 퀴즈 버튼을 클릭했을 때 정답을 표시하는 함수.
     */
    function revealAnswer() {
        // 1. 퀴즈 결과를 보이게 만듭니다.
        quizResult.style.display = 'block';
        revealButton.style.display = 'none'; // 정답 보기 버튼 숨기기
        restartButton.style.display = 'block'; // 재시작 버튼 표시
        
        // 2. 정답 텍스트를 변경하고 내용을 표시합니다.
        resultText.innerHTML = '정답은 **EPUB 3.0 표준 아키텍처**를 이용하는 것입니다. 단순히 파일을 모아놓은 것이 아닙니다.';
    }

    /**
     * @function resetQuiz
     * 퀴즈 결과를 초기화하고 재시작 상태로 돌리는 함수.
     */
    function resetQuiz() {
        // 텍스트 초기화
        resultText.innerHTML = '';
        // 퀴즈 결과 영역을 숨김 처리
        quizResult.style.display = 'none';
        // 원래의 버튼 상태로 되돌림
        revealButton.style.display = 'inline-block';
        restartButton.style.display = 'none';
    }


    // ==========================================================
    // ✨ 기능 2: 탭 네비게이션 기능 구현
    // ==========================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    /**
     * @function activateTab
     * 클릭된 탭에 따라 활성화/비활성화를 처리하는 핵심 함수입니다.
     * @param {string} targetId - 활성화할 탭의 ID (data-tab 값)
     */
    function activateTab(targetId) {
        // 1. 모든 버튼의 'active-tab' 클래스를 제거합니다. (비활성화)
        tabButtons.forEach(btn => btn.classList.remove('active-tab'));
        
        // 2. 모든 탭 패널을 숨깁니다.
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
            pane.style.display = 'none';
        });

        // 3. 클릭된 버튼을 활성화합니다.
        const activeBtn = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active-tab');
        }

        // 4. 해당 탭 패널을 보이게 하고 'active' 클래스를 추가합니다.
        const activePane = document.getElementById(targetId);
        if (activePane) {
            activePane.style.display = 'block';
            activePane.classList.add('active');
        }
    }

    // 탭 버튼에 클릭 이벤트 리스너를 추가합니다.
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 클릭된 버튼의 data-tab 값을 가져와서 활성화 함수를 호출합니다.
            const target = e.currentTarget.dataset.tab;
            if (target) {
                activateTab(target);
            }
        });
    });
});
