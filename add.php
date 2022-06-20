<?php

// add_action( 'wp_enqueue_scripts', 'enqueue_child_theme_styles');
// function enqueue_child_theme_styles() {
//   wp_enqueue_style( 'Parents_theme_style', get_template_directory_uri().'/style.css' );
// }

// add_filter( 'site_transient_update_plugins', 'remove_update_notifications' );
// function remove_update_notifications( $value ) {

//     if ( isset( $value ) && is_object( $value ) ) {
//         unset( $value->response[ 'elementor-pro/elementor-pro.php' ] );
//     }

//     return $value;
// }

# yarn install => For running
# yarn dev => For running
# https://github.com/raselupm/bengal-shop-frontend =>
# https://www.figma.com/file/dGnV13M0DEXrcPYbpzgsjL/Bengal-Shop => Desight
# => https://heroicons.com/
# yarn add v-click-outside =>
# Accordion => https://codesandbox.io/s/yvq8z580qv
# =>
#  yarn add vue-toastification => for Notification
# =>





# 10:52s / 1:17:56 |=> https://www.youtube.com/watch?v=mVIth8lmL80&list=PL03GdZZs-POWoSFFxqf15M-08tsY2fDiN&index=8
# 15:12s / 00:12 |=> Contact From <=| https://www.youtube.com/

#========== => Satrt Backend <= ==========#
/*
yarn add --dev sass sass-loader@10 |=> for sass install https://nuxtjs.org/pt/docs/configuration-glossary/configuration-css#a-propriedade-css
yarn install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8 npx tailwindcss init |=> https://tailwindcss.com/docs/guides/nuxtjs

yarn add @nuxtjs/axios |=> https://axios.nuxtjs.org/setup
yarn add --exact @nuxtjs/auth-next |=> https://auth.nuxtjs.org/guide/setup

go to nuxt.config.js |=> https://auth.nuxtjs.org/schemes/local

#========== => ## Send mail from Laravel to user with quee Backend <= ==========#

php artisan make:model Contact -mc
php artisan migrate || php artisan migrate:fresh --seed

|-> .env file config then
php artisan make:mail ContactMail |-> set mail connect
|-> views/emails/contact-mail.blade.php for mail body create must be use html table
|-> ContactController.php to control mail

## Send mail from Laravel to user via Queue

php artisan queue:table
php artisan migrate
go to .env |-> QUEUE_CONNECTION=database


# php artisan passport:keys => if download github file then run this
# php artisan passport:client --personal => if some error show like this {
    “RuntimeException: Personal access client not found. Please create one. in file D:\Wynch\vendor\laravel\passport\src\ClientRepository.php on line 122”
}

php artisan make:job ProcessContactMail
php artisan queue:listen => must be run  if not run this|| php artisan queue:work


#   |=> https://feathericons.com/

# php artisan make:model TaskList -a => for new table in database

# php artisan migrate =>

yarn add vue-pagination-2 => https://github.com/matfish2/vue-pagination-2

npm install --save vue-pagination-2







*/
