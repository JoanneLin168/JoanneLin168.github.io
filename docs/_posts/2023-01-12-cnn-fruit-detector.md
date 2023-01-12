---
layout: post
title:  "CNN Fruit Detector"
image: assets/images/cnn-fruit-detector.png
description: "A no entry sign detector using classical Computer Vision techniques"
languages: "Python"
permalink: "/projects/CNNFruitDetector"
featured: true
---
As practice for my final project, "Deep Learning for Accurately Counting Great Apes in Camera Trap Videos", I created a fruit detector that uses a Region Based Convolutional Neural Network (RCNN) to detect fruits in an image. I used PyTorch as my framework.

The dataset used for training and validation can be found [here](https://www.kaggle.com/datasets/mbkinaci/fruit-images-for-object-detection). The dataset contains 90 images of apples, oranges and bananas, and also provided the bounding boxes of each fruit. The dataset was split into 80% training and 20% validation. The test images were stock images found on the internet.

Due to limited resources, I was only capable of running the neural network with 4 epochs, however, the results were still fairly accurate.

Below are some examples:
![prediction1.jpg](/assets/images/cnn_fruit_detector_results/prediction1.jpg)
![prediction2.jpg](/assets/images/cnn_fruit_detector_results/prediction2.jpg)
![prediction3.jpg](/assets/images/cnn_fruit_detector_results/prediction3.jpg)
![prediction4.jpg](/assets/images/cnn_fruit_detector_results/prediction4.jpg)

Credits to [https://debuggercafe.com/custom-object-detection-using-pytorch-faster-rcnn/] for providing an excellent tutorial.