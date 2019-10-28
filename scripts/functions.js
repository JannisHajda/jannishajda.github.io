const GitHubProjects = async () => {
  let list = document.getElementById("projects");
  let url = new URL("https://api.github.com/users/jannishajda/repos");
  let params = { sort: "created" };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    let res = await fetch(url);
    let json = await res.json();

    json.forEach(repo => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute("href", repo.url);
      a.appendChild(document.createTextNode(repo.name));

      let p = document.createElement("p");
      p.appendChild(
        document.createTextNode(
          ": " + (repo.description || "No description available!")
        )
      );

      li.appendChild(a);
      li.appendChild(p);
      list.appendChild(li);
    });
  } catch {
    list.appendChild(
      document.createTextNode(
        "Sorry, meine Projekte konnten nicht geladen werden! 😭"
      )
    );
  }
};

GitHubProjects();
