<template>

    <div class="mt-sm-50 mt-xs-50">
        <h3 class="title">Advisor Registration</h3>
        <form class="register-form">
            <div class="single-input mb-30">
                <label for="usernameOne">First Name</label>
                <input type="text" id="usernameOne" name="username" placeholder="Username">
            </div>
            <div class="single-input mb-30">
                <label for="usernameOne">Last Name</label>
                <input type="text" id="usernameOne" name="username" placeholder="Username">
            </div>
            <div class="single-input mb-30">
                <label for="email">Email</label>
                <input type="text" id="email" name="username" placeholder="Email">
            </div>
            <div class="single-input mb-30">
                <label for="usernameOne">Dealer Rep ID</label>
                <input type="text" id="usernameOne" name="username" placeholder="Advisor Dealer Code">
            </div>
            <div class="single-input mb-30">
                <label for="usernameOne">Dealer</label>
                <input type="text" id="usernameOne" name="username" placeholder="Dealer Code">
            </div>
            <div class="single-input">
                <n-link to="/registration/thank-you"><button class="btn btn-dark btn-width-100">Submit Registration</button></n-link>
            </div>
        </form>
    </div>

</template>