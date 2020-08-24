<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">મૈત્રીસંગાથ</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-navbar-collapse" aria-controls="app-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>


        <div id="app-navbar-collapse" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/friends" class="nav-link">Friends</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/activity" class="nav-link">Activity</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gov-rules" class="nav-link">Gov. Rules</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/articles" class="nav-link">Articles</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="http://maitrisangath.com/#" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link">
                Language
                <span class="caret"></span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Gujrati</a>
                <a class="dropdown-item" href="#">English</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import '~bootstrap/dist/css/bootstrap.css'
</style>

<script>
  
// Setup Title of the page
document.title = "Maitrisangath"

</script>
