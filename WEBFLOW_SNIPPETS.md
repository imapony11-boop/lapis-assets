# Webflow custom code — Home page (Page settings → Custom code)
Replace imapony11-boop with the GitHub username. Tag the repo v1 before using @v1.

## Inside <head>
```html
<script>window.LAPIS_LOGO={"immoIcon":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3a687a84362de2b8b7_immoIcon.png","immoWord":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3a17c04dbca5172fe0_immoWord.webp","casaIcon":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3a85edc228caa95e65_casaIcon.png","casaWord":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3ad46e0009ca0df34b_casaWord.webp","ideaIcon":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3a4b73a87c957eff36_ideaIcon.png","ideaWord":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3ad7a7ad8cc7e295b2_ideaWord.webp","gads":"https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/6ac0ef3a373103ea9d8f070a_gads.webp"};</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/imapony11-boop/lapis-assets@v1/lapis.min.css" integrity="sha384-+AjnzdUjL/k29iZzBt5AYrgYmcY8uf39sEd/rUhHa/x5/AmeigclsrpqFQzII5Bw" crossorigin="anonymous">
```

## Before </body>
```html
<script defer src="https://cdn.jsdelivr.net/gh/imapony11-boop/lapis-assets@v1/lapis.min.js" integrity="sha384-n/d1eJilACUYRmu7ZpOuIw4KdatEDrWM9LPath8flRvv3GfItfB/HAEebpMqcY0d" crossorigin="anonymous"></script>
```
