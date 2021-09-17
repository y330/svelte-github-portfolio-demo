<script>
  import Theme from "./components/Theme.svelte";
  import Repos from "./components/Repos.svelte";
  import { repos } from "./stores";
</script>

<Theme />
<main>
  <h1>Hey, I'm Yonah</h1>
  <Repos repos={$repos} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
