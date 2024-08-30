window.onload = function () {
  const minLoadingTime = 200;

  const loadingStartTime = new Date().getTime();

  // Verifica o tempo de carregamento e esconde o loader após o tempo mínimo
  const hideLoader = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - loadingStartTime;

    // Aguarde o tempo mínimo de exibição do loader
    if (elapsedTime >= minLoadingTime) {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("content").style.display = "block";
    } else {
      // Se o tempo mínimo não foi alcançado, espera o tempo restante
      setTimeout(hideLoader, minLoadingTime - elapsedTime);
    }
  };

  // Esconde o loader após o carregamento e o tempo mínimo
  hideLoader();
};
