<!DOCTYPE html>
<html>
<head>
  <title>Web Programming</title>
  <style>
    body {
      background-color: lightyellow;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* New styles for the columns */
    .columns {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 20px 0;
    }

    .column {
      flex: 1;
      padding: 20px;
      text-align: center;
      border: 1px solid #ccc; /* Add a border to all columns */
    }

    /* Styles for different sizes */
    .small-image {
      max-width: 100px; /* Adjust the image size for the left column */
    }

    .normal-image {
      max-width: 200px; /* Adjust the image size for the center column */
    }

    .normal-post {
      font-size: 16px; /* Use a normal font size for posts */
      border: 1px solid #ccc; /* Add a border to post images */
      padding: 10px;
    }

    .normal-links {
      font-size: 16px;
    }

  </style>
</head>
<body>
  <div class="columns">
    <div class="column">
      <!-- Left column for small images -->
      <h2>Images Column</h2>
      <img class="small-image" src="1.jpg" alt="Image 1">
      <p>
        <strong>Image Title 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <img class="small-image" src="1.jpg" alt="Image 2">
      <p>
        <strong>Image Title 2:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div class="column">
      <!-- Center column for normal-sized posts with a border -->
      <h2>Posts Column</h2>
      <div class="normal-post">
        <img class="normal-image" src="1.jpg" alt="Post Image 1"> <!-- Adjust image size -->
        <p>
          <strong>Post Title 1:</strong> Post content goes here.
        </p>
      </div>
      <div class="normal-post">
        <img class="normal-image" src="1.jpg" alt="Post Image 2"> <!-- Adjust image size -->
        <p>
          <strong>Post Title 2:</strong> Post content goes here.
        </p>
      </div>
    </div>

    <div class="column">
      <!-- Right column for normal-sized links -->
      <h2>Links Column</h2>
      <ul class="normal-links">
        <li><a href="www.shwehinnthar.com">Shwehinnthar</a></li>
        <li><a href="www.myanmars.site">Myanmars</a></li>
      </ul>
    </div>
  </div>
</body>
</html>
