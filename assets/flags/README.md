Country flags in single CSS sprite
==================================

CSS Sprites - a method to optimize page loads by combining a large number of small images into one. 

## Usage

Include CSS file in your HTML code then insert a transparent 1x1 pixel image with classes `flag` and `flag-{country code}`. The country code is in the format ISO 3166-1 alpha-2:

```html
<html>
    <head>
        <link href="flags.css" rel=stylesheet type="text/css">
    </head>
    <body>
        <img src="blank.gif" class="flag flag-cz" alt="Czech Republic" />
    </body>
</html>
```

## Included flags


* Anguila (ai)
* Antigua y Barbuda (ag)
* Argentina (ar)
* Aruba (aw)
* Bahamas (bs)
* Barbados (bb)
* Belice (bz)
* Bermudas (bm)
* Bolivia (bo)
* Brasil (br)
* Canadá (ca)
* Chile (cl)
* Colombia (co)
* Costa Rica (cr)
* Cuba (cu)
* Curazao (cw)
* Dominica (dm)
* Ecuador (ec)
* El Salvador (sv)
* Estados Unidos (us)
* Falkland Islands (Malvinas) (fk)
* Granada (gd)
* Groenlandia (gl)
* Guadalupe (Francia) (gp)
* Guatemala (gt)
* Guyana (gy)
* Haití (ht)
* Honduras (hn)
* Islas Caimán (ky)
* Islas Turcas y Caicos (tc)
* Islas Vírgenes Británicas (vg)
* Islas Vírgenes de los Estados Unidos (vi)
* Jamaica (jm)
* Martinica (mq)
* Montserrat (ms)
* México (mx)
* Netherlands Antilles (an)
* Nicaragua (ni)
* Panamá (pa)
* Paraguay (py)
* Perú (pe)
* Puerto Rico (pr)
* República Dominicana (do)
* Saint Barthelemy (bl)
* Saint Kitts and Nevis (kn)
* Saint Lucia (lc)
* Saint Martin (mf)
* Saint Vincent and the Grenadines (vc)
* Surinam (sr)
* Trinidad y Tobago (tt)
* Uruguay (uy)
* Venezuela (ve)

## Links

* [CSS Flag Sprites generator](https://www.flag-sprites.com/ "Country flags in single CSS sprite")
* [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)