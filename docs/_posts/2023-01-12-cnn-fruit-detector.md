---
layout: post
title:  "CNN Fruit Detector"
image: assets/images/cnn-fruit-detector.png
description: "Using PyTorch RCNN model to localise fruit in images"
languages: "Python"
permalink: "/projects/CNNFruitDetector"
featured: true
---
As practice for my final project, "Deep Learning for Accurately Counting Great Apes in Camera Trap Videos", I created a fruit detector that uses a Region Based Convolutional Neural Network (RCNN) to detect fruits in an image. I used PyTorch as my framework.

The dataset used for training and validation can be found [here](https://www.kaggle.com/datasets/mbkinaci/fruit-images-for-object-detection). The dataset contains 75 images of apples, oranges and bananas, and also provided the bounding boxes of each fruit. The dataset was split into 80% training and 20% validation. The test images were stock images found on the internet.

Due to limited resources, I was only capable of running the neural network with 4 epochs, however, the results were still fairly accurate.

Below are the results of the test images. As you can see with the second image, it predicted that they were all bananas but was unable to correctly identify the bounding boxes. This can be improved with more epochs and more images to train on.
![prediction1.jpg](/assets/images/cnn_fruit_detector_results/prediction1.jpg)
![prediction2.jpg](/assets/images/cnn_fruit_detector_results/prediction2.jpg)
![prediction3.jpg](/assets/images/cnn_fruit_detector_results/prediction3.jpg)
![prediction4.jpg](/assets/images/cnn_fruit_detector_results/prediction4.jpg)

Credits to <https://debuggercafe.com/custom-object-detection-using-pytorch-faster-rcnn/> for providing an excellent tutorial.