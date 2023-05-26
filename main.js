window.onload = function () {
  var jokecontent1 = document.getElementById("jokeline1");
  var jokecontent2 = document.getElementById("jokeline2");
  var jokeGenerateButton = document.getElementById("btn");
  jokeGenerateButton.addEventListener("click", jokeResponse);
  async function jokeResponse() {
    const url = "https://dad-jokes.p.rapidapi.com/random/joke";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "81e1e6b27dmshab554940892dc52p163d9bjsncaa18a84d2cf",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const line1 = result.body[0].setup;
      const line2 = result.body[0].punchline;
      jokecontent1.innerHTML = line1;
      jokecontent2.innerHTML = line2;

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
};
