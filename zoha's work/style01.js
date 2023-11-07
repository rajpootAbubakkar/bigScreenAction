document.addEventListener("DOMContentLoaded", function () {
  const videoList = document.getElementById("videoList");
  const mainVideo = document.getElementById("mainVideo");

  const videoData = [
    {
      src: "/Users/macbook/Downloads/video01.mp4",
      title: "Video 1 Title",
    },
    {
      src: "/Users/macbook/Downloads/video02.mp4",
      title: "Video 2 Title",
    },
    {
      src: "/Users/macbook/Downloads/video01.mp4",
      title: "Video 3 Title",
    },
    {
      src: "/Users/macbook/Downloads/video02.mp4",
      title: "Video 4 Title",
    },
    {
      src: "/Users/macbook/Downloads/video01.mp4",
      title: "Video 5 Title",
    },
    {
      src: "/Users/macbook/Downloads/video02.mp4",
      title: "Video 6 Title",
    },
    {
      src: "/Users/macbook/Downloads/video01.mp4",
      title: "Video 7 Title",
    },
    {
      src: "/Users/macbook/Downloads/video02.mp4",
      title: "Video 8 Title",
    },
  ];

  videoData.forEach((videoInfo, index) => {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("vid");

    if (index === 0) {
      videoContainer.classList.add("active");
      mainVideo.src = videoInfo.src;
      document.querySelector(".title").innerHTML = videoInfo.title;
    }

    const videoElement = document.createElement("video");
    videoElement.src = videoInfo.src;
    videoElement.muted = true;

    const titleElement = document.createElement("h3");
    titleElement.classList.add("title");
    titleElement.innerHTML = videoInfo.title;

    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(titleElement);

    videoContainer.onclick = () => {
      document
        .querySelectorAll(".vid")
        .forEach((vid) => vid.classList.remove("active"));
      videoContainer.classList.add("active");
      mainVideo.src = videoInfo.src;
      document.querySelector(".title").innerHTML = videoInfo.title;
    };

    videoList.appendChild(videoContainer);
  });
});
