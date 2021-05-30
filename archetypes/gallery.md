---
title: "{{ replace .Name "-" " " | title }}"
date: "{{ .Date }}"
draft: true

type: gallery

categories:
  - photography

tags:
  - TAG

timeline:
  image: EVENT_IMAGE_PREVIEW
  icon: fa-camera-retro
  desc: EVENT_DESCRIPTION
  class: event-container-secondary

gallery:
  # interval: 1000
  images:
    - name: IMAGE_TITLE
      path: images/IMAGE_PATH
      desc: IMAGE_DESCRIPTION
---
