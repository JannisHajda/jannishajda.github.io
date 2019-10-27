let gitRepos = async () => {
  let url = "https://api.github.com/users/jannishajda/repos";
  let res = await fetch(url);
  let repos = await res.json();
  let ul = document.getElementById("gitProjects");

  try {
    repos.map(repo => {
      if (repo.description == null) {
        repo.description = "No description available!";
      }

      li = document.createElement("li");

      a = document.createElement("a");
      a.setAttribute("href", repo.url);
      a.appendChild(document.createTextNode(repo.name));

      desc = document.createElement("p");
      desc.appendChild(document.createTextNode(": " + repo.description));

      li.appendChild(a);
      li.appendChild(desc);

      ul.append(li);
    });
  } catch {
    let p = document.createElement("p");
    p.appendChild(
      document.createTextNode(
        "Sorry, meine Projekte konnten nicht geladen werden! 😭"
      )
    );

    ul.append(p);
  }
};

let meowFact = async () => {
  let url = "https://meowfacts.herokuapp.com/";
  let res = await fetch(url);
  let json = await res.json();
  let p = document.getElementById("meowFact");

  try {
    let fact = json.data[0];
    p.appendChild(
      document.createTextNode(
        "Hier noch ein zufälliger Fakt über Katzen: " + fact + " "
      )
    );

    let a = document.createElement("a");
    a.setAttribute("href", "https://meowfacts.herokuapp.com");
    a.appendChild(document.createTextNode("Quelle"));

    p.appendChild(a);
  } catch {}
};

meowFact();
gitRepos();
