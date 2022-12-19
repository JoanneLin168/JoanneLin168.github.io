---
layout: post
title:  "3D Sphere Reconstruction"
image: assets/images/3d-sphere-reconstruction.png
description: "A stereo vision system that can accurately reconstruct spheres in 3D"
languages: "Python"
permalink: "/projects/3DSphereReconstruction"
featured: true
---
For Part 2 of my "Image Processing and Computer Vision" coursework, I had to create a stereo vision system that uses 2 cameras in a 3D simulation to reconstruct the 6 observable spheres.

Each run randomly generated 6 different spheres at slightly different positions.

Below shows an example of one run:

**Views in camera 0 and camera 1**
![view0.png](/assets/images/3dspherereconstruction_results/view0.png)
![view1.png](/assets/images/3dspherereconstruction_results/view1.png)

**Estimates in camera 0 and camera 1**
![view0.png](/assets/images/3dspherereconstruction_results/view0_estimate.png)
![view1.png](/assets/images/3dspherereconstruction_results/view1_estimate.png)

This particular example had a RMSE of 0.042 for the sphere centres, and a RMSE of 0.106 for the sphere radii.