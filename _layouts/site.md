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

        <table class="nav-menu"><tr>
            <td><a href="#">HOME</a></td>
            <td><a href="#lunch">LUNCH</a></td>
            <td><a href="#dinner">DINNER</a></td>
            <td><a href="#beer-wine">BEER & WINE</a></td>
            <td><a href="#desserts">DESSERTS</a></td>
            <td><a href="#catering">CATERING</a></td>
        </tr></table>

        <img class="banner" src="/img/banner.png" />

        <div class="container">

            {% for post in site.posts limit:5 %}
                <div data-timestamp="{{ post.date | date: "%m-%d-%Y" }}" class="announcement hidden">{{ post.content }}</div>
            {% endfor %}

            {% capture about_us %}{% include about-us.md %}{% endcapture %}
            {% capture hours %}{% include hours.md %}{% endcapture %}
            {% capture contact_us %}{% include contact-us.md %}{% endcapture %}
   
            <div class="about-us">
                <table>
                    <tr>
                        <td>{{ about_us | markdownify }}</td>
                        <td><img src="img/patio.jpg"></td>
                    </tr>
                    <tr>
                        <td class="hours">{{ hours | markdownify }}</td>
                        <td class="contact-us">{{ contact_us | markdownify }}</td>
                    </tr>
                </table>
            </div>

            <img class="banner-divider" src="img/banner-lunch.png" />

            <div id="lunch">
                <h3 class="section">Lunch Menu</h3>
                <div class="menu" id="lunch-menu">
                {% capture lunch %}{% include lunch.md %}{% endcapture %}
                {{ lunch | markdownify }}
                </div>
            </div>

            <img class="banner-divider" src="img/banner-dinner.png" />

            <div id="dinner">
                <h3 class="section">Dinner Menu</h3>
                <div class="menu">
                {% capture dinner %}{% include dinner.md %}{% endcapture %}
                {{ dinner | markdownify }}
                </div>
            </div>

            <img class="banner-divider" src="img/banner-beer-wine.png" />

            <div id="beer-wine">
                <h3 class="section">Beer & Wine</h3>
                <div class="menu">
                {% capture beer_wine %}{% include beer-wine.md %}{% endcapture %}
                {{ beer_wine | markdownify }}
                </div>
            </div>

            <img class="banner-divider" src="img/banner-dessert.png" />

            <div id="desserts">
                <h3 class="section">Desserts</h3>
                <div class="menu">
                {% capture desserts %}{% include desserts.md %}{% endcapture %}
                {{ desserts | markdownify }}
                </div>
            </div>

            <img class="banner-divider" src="img/banner-catering.png" />

            <div id="catering">
                <h3 class="section">Catering</h3>
                <div class="menu">
                {% capture catering %}{% include catering.md %}{% endcapture %}
                {{ catering | markdownify }}
                </div>
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

            <div class="footer">
            {% capture footer %}{% include footer.md %}{% endcapture %}
            {{ footer | markdownify }}
            </div>

        </div>

	</body>
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/site.js"></script>
</html>
