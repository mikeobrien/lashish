<!DOCTYPE html>
<!-- "Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That's relativity." -->
<html>
	<head>
		<title>La Shish Mediterranean</title>
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <meta name="description" content="Turkish coffee, lamb kebab, beef shawarma, rice pudding, hummus. Authentic Freshly Made Mediterranean Cuisine. Serving beer and wine." />
        
        <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="/css/site.css" rel="stylesheet" type="text/css" />     
	</head>

	<body>

    <table class="menu"><tr>
        <td><a href="#">HOME</a></td>
        <td><a href="#lunch-menu">LUNCH MENU</a></td>
        <td><a href="#dinner-menu">DINNER MENU</a></td>
        <td><a href="#desserts">HOME MADE DESSERTS</a></td>
        <td><a href="#wine">WINE</a></td>
        <td><a href="#catering">CATERING</a></td>
    </tr></table>

    <img class="banner" src="/img/banner.png" />

    <div class="container">

        <div class="announcements">
        {% capture announcements %}{% include announcements.md %}{% endcapture %}
        {{ announcements | markdownify }}
        </div>

        <div class="about-us">
        {% capture about_us %}{% include about-us.md %}{% endcapture %}
        {{ about_us | markdownify }}
        </div>

        <div class="links">
        <table>
        <tr>
            <td><a href="https://www.facebook.com/La-Shish-Mediterranean-Cafe-293742396866/"><img src="/img/facebook.png" /></a></td>
            <td><a href="https://www.tripadvisor.com/Restaurant_Review-g49007-d446321-Reviews-La_Shish_Greek_Lebanese_Cafe-Cary_North_Carolina.html"><img src="/img/trip-advisor.png" /></a></td>
            <td><a href="https://www.yelp.com/biz/la-shish-cary"><img src="/img/yelp.png" /></a></td>
        </tr>
        </table>
        </div>

        <div class="lunch-menu" id="lunch-menu">
        {% capture lunch_menu %}{% include lunch-menu.md %}{% endcapture %}
        {{ lunch_menu | markdownify }}
        </div>

        <div class="dinner-menu" id="dinner-menu">
        {% capture dinner_menu %}{% include dinner-menu.md %}{% endcapture %}
        {{ dinner_menu | markdownify }}
        </div>

        <div class="footer">
        {% capture footer %}{% include footer.md %}{% endcapture %}
        {{ footer | markdownify }}
        </div>


    </div>

	</body>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/jquery.js"></script>
</html>
