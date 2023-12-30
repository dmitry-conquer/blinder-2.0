const prevBlockButton = document.getElementById("prev-block");

if (prevBlockButton) {
  const orderForm = document.getElementById("order-form");
  const nextBlockButton = document.getElementById("next-block");
  const sendFormButton = document.getElementById("send-form-button");
  const formBlocks = document.querySelectorAll("[data-quiz-id]");
  const commerceTypeInput = document.getElementById("project-type-commerce");
  const pagination = document.getElementById("block-counter");
  const withoutPurposeCheckbox = document.getElementById("without-purpose");
  const addFilesButton = document.getElementById("add-files");
  const totalBlocksLength = formBlocks.length;
  let currentBlockId = 0;
  const multipleCheckBox = document.querySelector("[data-quiz-id='3']");
  const multipleCheckBoxId = Number(multipleCheckBox.dataset.quizId);
  const commerceBlockId = Number(document.querySelector("[data-quiz-id='1']").dataset.quizId);
  const progressBar = document.getElementById("progress-bar");

  function startQuiz() {
    showQuestion(currentBlockId);
  }

  startQuiz();
  changeBarPosition(currentBlockId);

  function showQuestion(index) {
    formBlocks.forEach(block => (block.style.display = "none"));
    document.querySelector(`[data-quiz-id="${index}"]`).style.display = "block";
  }

  function nextBlock() {
    if (currentBlockId < totalBlocksLength - 1) {
      currentBlockId++;
      if (currentBlockId === 1 && !commerceTypeInput.checked) {
        currentBlockId++;
      }
      isChecked(currentBlockId);
      prevBlockButton.disabled = false;
      if (Number(currentBlockId) === multipleCheckBoxId) {
        withoutPurposeCheckbox.parentNode.style.display = "block";
      } else {
        withoutPurposeCheckbox.parentNode.style.display = "none";
      }

      changeBarPosition(currentBlockId);
      showQuestion(currentBlockId);
      showCurrentBlock(currentBlockId);
    }
    if (Number(currentBlockId) === Number(totalBlocksLength - 1)) {
      nextBlockButton.style.display = "none";
      sendFormButton.style.display = "block";
      addFilesButton.style.display = "flex";
    }
    window.scrollTo({
      top: 0,
    });
  }

  function prevBlock() {
    if (Number(currentBlockId) === Number(totalBlocksLength - 1)) {
      sendFormButton.style.display = "none";
      nextBlockButton.style.display = "block";
      addFilesButton.style.display = "none";
    }
    if (currentBlockId > 0) {
      currentBlockId--;
      if (currentBlockId === 1 && !commerceTypeInput.checked) {
        currentBlockId--;
      }
      isChecked(currentBlockId);
      if (Number(currentBlockId) === multipleCheckBoxId) {
        withoutPurposeCheckbox.parentNode.style.display = "block";
      } else {
        withoutPurposeCheckbox.parentNode.style.display = "none";
      }
      changeBarPosition(currentBlockId);
      showQuestion(currentBlockId);
      showCurrentBlock(currentBlockId);
    }
    if (currentBlockId === 0) {
      prevBlockButton.disabled = true;
    }
    window.scrollTo({
      top: 0,
    });
  }

  function isChecked(index) {
    const currentBlock = document.querySelector(`[data-quiz-id="${index}"]`);
    let isOptionChecked = currentBlock.querySelector("input[type=radio]:checked");
    if (Number(index) === multipleCheckBoxId) {
      isOptionChecked = [...currentBlock.querySelectorAll("input[type=radio]:checked")].length >= 2 || withoutPurposeCheckbox.checked;
    }
    if (isOptionChecked) {
      nextBlockButton.classList.add("option-is-checked");
      nextBlockButton.disabled = false;
      if (Number(index) === totalBlocksLength - 1) {
        sendFormButton.classList.add("option-is-checked");
        sendFormButton.disabled = false;
      }
    } else {
      nextBlockButton.classList.remove("option-is-checked");
      nextBlockButton.disabled = true;
      if (Number(index) === totalBlocksLength - 1) {
        sendFormButton.classList.remove("option-is-checked");
        sendFormButton.disabled = true;
      }
    }
  }

  function changeBarPosition(index) {
    progressBar.style.left = `${Number(index) * 20}%`;
  }

  function showCurrentBlock(index) {
    let result;

    if (Number(index) === commerceBlockId) {
      result = `крок доповнення`;
    } else {
      result = `крок <span>0${(index = index === 0 ? 1 : index)}</span> / <span>0${totalBlocksLength - 1}</span>`;
    }
    pagination.innerHTML = result;
  }

  document.querySelectorAll("input[type=radio]").forEach(radio => {
    radio.addEventListener("change", e => {
      const blockId = e.target.closest("[data-quiz-id]").dataset.quizId;
      isChecked(blockId);
    });
  });

  document.getElementById("without-purpose").addEventListener("change", e => {
    isChecked(multipleCheckBoxId);
  });

  prevBlockButton.addEventListener("click", prevBlock);

  nextBlockButton.addEventListener("click", nextBlock);

  orderForm.addEventListener("submit", e => {
    e.preventDefault();
    MicroModal.show("order-result", {
      disableScroll: true,
    });
  });
}
