# demo-hemsidor

Tre demohemsidor: Viken Ateljé, Kök 19 och Kolin.

Publika länkar, när GitHub Pages är på (Settings → Pages → GitHub Actions):

- https://abbesp.github.io/demo-hemsidor/
- https://abbesp.github.io/demo-hemsidor/viken.html
- https://abbesp.github.io/demo-hemsidor/kok.html
- https://abbesp.github.io/demo-hemsidor/kolin.html

Källan ligger i det här repot. Workflowet `.github/workflows/pages.yml` publicerar vid varje push till `main`.

Designuppdatering: alla tre demos har egna visuella uttryck, en gemensam demosamling, mobilanpassad navigation och lokala bildfiler. Bokningar, omdömen, priser och köp är fiktiva exempel. Inga betalningar eller bokningar skickas till en server.

Förhandsvisa lokalt med `python -m http.server 4174` och öppna http://localhost:4174.
