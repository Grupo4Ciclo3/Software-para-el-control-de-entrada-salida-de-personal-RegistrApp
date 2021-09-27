<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">RegistrApp</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item ">
            <router-link class="nav-link pr-3 text-white" to="/">Crear Registro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/view">Ver Registro</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

