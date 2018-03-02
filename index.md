---
layout: home
title: Home
heading: "Rise Up Like A River"
subheading: "When the rain starts to fall, and the snow comes to drift."
---
<div class="container">
  <section class="row">
    <div class="col">
      <h2>Introducing&hellip; Rise Up Like A River</h2>
      <p>Nick talks about his favourite songs from <em>Rise Up Like A River</em> and the process of writing and recording them.</p>
    </div>
</section>
  <section class="row">
    <div class="col-sm-12 col-md">
      <div class="embed-responsive embed-responsive-1by1">
        <iframe class="external-media" src="https://www.youtube.com/embed/eeyjtwKAJiE?rel=0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-sm-12 col-md">
      <div class="embed-responsive embed-responsive-1by1">
        <iframe class="external-media" src="https://www.youtube.com/embed/mjlVm5gMnEM?rel=0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-sm-12 col-md">
      <div class="embed-responsive embed-responsive-1by1">
        <iframe class="external-media" src="https://www.youtube.com/embed/qsaNbN-ygyw?rel=0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-sm-12 col-md">
      <div class="card text-center h-100">
        <div class="card-body d-flex align-items-center justify-content-center">
          <a target="_blank" href="https://www.youtube.com/playlist?list=PLr3HhbPCPQNoCwNcuysgQH-mxmmjE6zhx">View more&hellip;</a>
        </div>
      </div>
    </div>
  </section>
  <section class="row">
    <div class="col-sm-12 col-md">
      <h2>Tour Dates</h2>
      <p>No upcoming dates.</p>
      <p>Stay tuned via <a target="_blank" href="https://www.songkick.com/artists/1679689-nick-payne">Songkick</a></p>
    </div>
    <div class="col-sm-12 col-md">
      <h2>Latest blog post</h2>
      <article>
        <h3>{{ site.posts[0].title }}</h3>
        <p>{{ site.posts[0].date | date: "%b %-d, %Y" }}{% if site.posts[0].author %} &bullet; {{ site.posts[0].author }}{% endif %}{% if site.posts[0].meta %} &bullet; {{ site.posts[0].meta }}{% endif %}</p>
        <p>{{ site.posts[0].excerpt | strip_html }}</p>
        <p><a href="{{ site.baseurl }}{{ site.posts[0].url }}">... Read more</a></p>
      </article>
    </div>
    <div class="col-sm-12 col-md">
      <h2>Keep in touch</h2>
      <h3>Join my mailing list</h3>
      {% include mailing-list.html %}
    </div>
  </section>
</div>
