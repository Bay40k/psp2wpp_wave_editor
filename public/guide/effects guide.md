# Vita Waveparams Guide

## Table of Contents
1. [LiveArea Icon (Select)](#livearea-icon-select)
2. [Material](#material)
3. [PointLightSource](#pointlightsource)
4. [Fog0](#fog0)
5. [WaveInstance](#waveinstance)
6. [Sky](#sky)
7. [FFTWave](#fftwave)
8. [WaveRenderer](#waverenderer)

Below are screenshots of the major settings and their effects. Settings not listed did not show any visible change.

## LiveArea Icon (Select)

![](/guide/2024-02-06-202955.png)
### selector[0]
- Bottom color
### selector[1]
- Top color

## Material

### color
- Value range: 0 - 1
- Default theme (`effects_default_0512_01`) (before)
  ![](/guide/2024-02-06-205546.png)
- r = 1, b = 0 (after)
  ![](/guide/2024-02-06-210020.png)

## PointLightSource

### distance
- Value range: 0 - 100
- distance = 100
  ![](/guide/2024-02-06-212427.png)
- distance = 0
  ![](/guide/2024-02-06-212543.png)

## Fog0

### color
- Value range: 0 - 1
- r = 1, g = 0, b = 0
  ![](/guide/2024-02-06-214026.png)
### density
- Value range: 1 - 10
- density.a, b, c, d = 1
  ![](/guide/2024-02-06-214825.png)
- density.b = 0
  ![](/guide/2024-02-06-215041.png)
- density.c = 0
  ![](/guide/2024-02-06-215224.png)
- density.d = 0
  ![](/guide/2024-02-06-215327.png)

## WaveInstance

### center color
- Value range: 0 - 1
- r = 1
  ![](/guide/2024-02-07-070355.png)
- b = 1
  ![](/guide/2024-02-07-070452.png)
### edge color
- Value range: 0 - 1
- b = 1
  ![](/guide/2024-02-07-070533.png)
### distortion scale
- Value range: 0 - 1
- Makes waves spikier, similar to FFTWave patch size
- 0.3
  ![](/guide/2024-02-07-075617.png)
### translation
- Value range: -5 - 5
- Moves wave up/down (+y/-y), left/right (-x/+x), in/out (-z/+z)
- y+0.5
  ![](/guide/2024-02-07-080116.png)
### rotation
- Value range: -5 - 5
- Rotation +x tilts top of wave towards viewer
- Rotation z rolls the wave
- Rotation y spins the wave laterally like a top
- Rotation.w is a value multiplier, don't set to 0
### uv_scale
- Value range: 0.1 - 1
- Works like a zoom on the wave surface, smooths out the whole thing
- 0.2
  ![](/guide/2024-02-07-081059.png)
### uv_rotate
- Value range: 0 - 360
- Doesn't affect anything except for how the waves transition between different waves with different uv rotate values
### cross_section
- Seems to work like transform, \_flat values have no effect

## Sky

### theta
- Value range: -1 to 1
- theta[0] = -1
  ![](/guide/2024-02-07-071519.png)
- theta[0] = 1
  ![](/guide/2024-02-07-071609.png)
- theta[1] = 1
  ![](/guide/2024-02-07-071647.png)
### distance
- Value range: 0 - 10
- 0
  ![](/guide/2024-02-07-071733.png)
- 10
  ![](/guide/2024-02-07-071809.png)
### sun
- Value ranges: color = 0 - 1, power = 0 - 100, control = 0 - 1
- Distance = 0, sun color = 1, 1, 1, sun power = 100
  ![](/guide/2024-02-07-072027.png)
- Sun power = 0
  ![](/guide/2024-02-07-072133.png)
- Sun power = 100, sun control = 0.5 (control moves sun around)
  ![](/guide/2024-02-07-072303.png)
### zenith color
- r = 1
  ![](/guide/2024-02-07-072535.png)
### horizon color
- b = 1
  ![](/guide/2024-02-07-072726.png)
### wave fog alpha
- Value range: 0 - 1
- 1
  ![](/guide/2024-02-07-072920.png)
### radius
- Value range: 0 - 10
- 6
  ![](/guide/2024-02-07-073015.png)
### xscale
- Value range: 0 - 10?
- Seems to stretch sky horizontally
- 3, wave fog alpha = 0
  ![](/guide/2024-02-07-073133.png)
### side angle
- Value range: -1 - 1
- 0.01
  ![](/guide/2024-02-07-073502.png)
### horizon angle
- Value range: -1 - 1
- -0.5
  ![](/guide/2024-02-07-073627.png)
### horizon blend range
- Value range: 0 - 1
- 0.12
  ![](/guide/2024-02-07-073828.png)
### horizon curvature
- Value range: 0 - 1 (possibly negative?)
- Cropped due to screenshot error
- 0.1
  ![](/guide/2024-02-07-073956.png)
### sky blend
- Value ranges: 0 - 1
- Start = 0 (unchanged), end = 0.5
  ![](/guide/2024-02-07-074040.png)

## FFTWave

### gravity
- Value range: 0 - 20
- Results in loftier waves that move more
- 1
  ![](/guide/2024-02-07-074419.png)
### log A
- Value range: -10 - -30 (be careful, -20 is a good start)
- Small changes seem to massively affect wave amplitude, "A" by itself doesn't seem to do much on its own
- log A = -15
  ![](/guide/2024-02-07-074802.png)
### patch size
- Value range: 0 - 1000
- Seems to add more waves with granular control
- 300
  ![](/guide/2024-02-07-075127.png)
### wind
- Value ranges: speed = 0 - 100, dir = -10 - 10
- Wind settings directly affect the speed of the waves and their overall size
- Time_step has no visible change

## WaveRenderer

### edge_fog
- Value range: 0 - 1
- Edge fog color matches WaveInstance fog color, these are like opacity values
- edge_fog[0], [1] = 0
  ![](/guide/2024-02-07-082425.png)
- edge_fog[0] = 1
  ![](/guide/2024-02-07-082557.png)
- edge_fog[1] = 1
  ![](/guide/2024-02-07-082637.png)

