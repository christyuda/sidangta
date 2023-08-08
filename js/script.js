function handleFileSelect(fileInputId, statusLabelId, fileStatusId, spinnerId) {
    const fileInput = document.getElementById(fileInputId);
    const statusLabel = document.getElementById(statusLabelId);
    const fileStatus = document.getElementById(fileStatusId);
    const spinner = document.getElementById(spinnerId);

    fileInput.addEventListener('change', function () {
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        statusLabel.innerText = fileName;
        fileStatus.style.display = 'none';
        spinner.style.display = 'block';
        setTimeout(function () {
          spinner.style.display = 'none';
        }, 2000);
      } else {
        statusLabel.innerText = 'Pilih file...';
        fileStatus.style.display = 'block';
      }
    });
  }

  

  handleFileSelect('fileInput1', 'statusLabel1', 'fileStatus1', 'spinner1');
  handleFileSelect('fileInput2', 'statusLabel2', 'fileStatus2', 'spinner2');
  handleFileSelect('fileInput3', 'statusLabel3', 'fileStatus3', 'spinner3');
  handleFileSelect('fileInput4', 'statusLabel4', 'fileStatus4', 'spinner4');
  handleFileSelect('fileInput5', 'statusLabel5', 'fileStatus5', 'spinner5');
  handleFileSelect('fileInput6', 'statusLabel6', 'fileStatus6', 'spinner6');
  handleFileSelect('fileInput7', 'statusLabel7', 'fileStatus7', 'spinner7');
  handleFileSelect('fileInput8', 'statusLabel8', 'fileStatus8', 'spinner8');
  handleFileSelect('fileInput9', 'statusLabel9', 'fileStatus9', 'spinner9');


//handle complete


  //handle step
  document.addEventListener('alpine:init', () => {
    Alpine.data('formWizard', () => ({
        // ... (existing data and methods)

        // Function to check if the current step's form is filled correctly
        validateStep(stepIndex) {
            const stepInputs = document.querySelectorAll(`.step[data-step="${stepIndex}"] input:not([type="hidden"]):not([type="file"]):not([type="submit"])`);
            for (const input of stepInputs) {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    return false;
                }
            }
            return true;
        },

        // Function to validate the next step and show alert if not filled correctly
        validateNext(stepIndex) {
            if (this.validateStep(stepIndex)) {
                this.step = stepIndex + 1;
            } else {
                this.showAlert();
            }
        },

        // Function to validate the complete step and show alert if not filled correctly
        validateComplete() {
            if (this.validateStep(3)) {
                this.step = 'complete';
            } else {
                this.showAlert();
            }
        },

        // Function to show the alert modal
        showAlert() {
            alert("Pastikan semua input telah diisi dengan benar sebelum melanjutkan.");
        }
    }));
});
