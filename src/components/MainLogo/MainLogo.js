import React from 'react'
import { MainLogoWrapper } from './MainLogoStyled'
import { useRecoilValue } from 'recoil'
import { isDarkModeState } from '../../recoil/commonState'

const MainLogo = props => {
  const isDarkMode = useRecoilValue(isDarkModeState)
  return (
    <MainLogoWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' width='153' height='32' viewBox='0 0 524 110' version='1.1'>
        <path
          d='M 211.342 36.250 C 209.866 38.587, 203.757 48.375, 197.766 58 L 186.873 75.500 191.072 75.814 C 193.382 75.987, 195.676 75.724, 196.170 75.230 C 196.664 74.736, 201.038 67.963, 205.889 60.178 L 214.709 46.025 224.008 61.013 L 233.306 76 237.737 76 C 240.173 76, 242.017 75.564, 241.833 75.032 C 241.044 72.739, 215.430 32.046, 214.763 32.024 C 214.357 32.011, 212.818 33.913, 211.342 36.250 M 144 34.582 C 144 35.666, 170.495 77.977, 171.182 77.989 C 171.557 77.995, 177.986 68.212, 185.469 56.250 L 199.075 34.500 194.901 34.186 C 192.606 34.013, 190.324 34.276, 189.830 34.770 C 189.336 35.264, 184.962 42.037, 180.111 49.822 L 171.291 63.975 161.992 48.987 L 152.694 34 148.347 34 C 145.956 34, 144 34.262, 144 34.582 M 251 55 L 251 76 275.500 76 L 300 76 300 72 L 300 68 279.500 68 L 259 68 259 51 L 259 34 255 34 L 251 34 251 55 M 309 55 L 309 76 313 76 L 317 76 317 55 L 317 34 313 34 L 309 34 309 55 M 328 55 L 328 76 348.250 75.985 C 369.983 75.969, 371.722 75.635, 375.328 70.778 C 378.224 66.878, 379.034 47.996, 376.581 41.574 C 373.898 34.549, 371.835 34, 348.099 34 L 328 34 328 55 M 389 51.277 C 389 75.706, 389.286 76, 412.982 76 C 437.408 76, 438 75.385, 438 50.032 L 438 34 434 34 L 430 34 430 49.800 C 430 60.756, 429.632 65.968, 428.800 66.800 C 427.128 68.472, 399.872 68.472, 398.200 66.800 C 397.368 65.968, 397 60.756, 397 49.800 L 397 34 393 34 L 389 34 389 51.277 M 454.763 35.565 C 449.376 38.488, 447.360 46.928, 450.566 53.128 C 453.071 57.971, 457.048 59, 473.268 59 C 488.307 59, 490 59.455, 490 63.500 C 490 67.688, 488.528 68, 468.800 68 C 458.460 68, 450 68.255, 450 68.566 C 450 70.502, 452.645 73.371, 455.548 74.585 C 460.495 76.652, 487.987 76.575, 492.033 74.483 C 498.608 71.083, 500.067 59.615, 494.618 54.161 C 491.990 51.530, 491.778 51.496, 475.746 51.178 C 466.385 50.992, 458.996 50.412, 458.266 49.806 C 456.665 48.477, 456.628 44.772, 458.200 43.200 C 459.049 42.351, 464.927 42, 478.273 42 C 495.562 42, 497.119 41.856, 496.816 40.285 C 496.635 39.342, 494.960 37.542, 493.095 36.285 C 489.905 34.135, 488.753 34.002, 473.602 34.040 C 461.315 34.071, 456.851 34.432, 454.763 35.565 M 503 35 C 503 35.550, 503.675 36, 504.500 36 C 505.500 36, 506 37, 506 39 C 506 40.650, 506.450 42, 507 42 C 507.550 42, 508 40.698, 508 39.107 C 508 37.458, 508.645 35.966, 509.500 35.638 C 510.656 35.195, 511 35.859, 511 38.531 C 511 42.292, 512.959 43.449, 513.063 39.750 L 513.127 37.500 514.031 39.750 C 514.529 40.987, 515.331 42, 515.815 42 C 516.299 42, 517.183 40.987, 517.780 39.750 L 518.865 37.500 518.932 39.750 C 519.053 43.770, 521 42.122, 521 38 C 521 33.651, 518.669 32.318, 517.500 36 C 517.151 37.100, 516.476 38, 516 38 C 515.524 38, 514.849 37.100, 514.500 36 C 513.968 34.323, 512.987 34, 508.433 34 C 505.445 34, 503 34.450, 503 35 M 336 55 L 336 68 351.429 68 C 370.497 68, 370 68.321, 370 55.994 C 370 51.119, 369.561 45.976, 369.025 44.565 L 368.050 42 352.025 42 L 336 42 336 55'
          stroke='none' fill={isDarkMode ? '#fff' : '#040404'} fillRule='evenodd' />
        <path
          d='M 3 30 L 3 56 7.500 56 L 12 56 12 30 L 12 4 7.500 4 L 3 4 3 30 M 86 30 L 86 56 90.500 56 L 95 56 95 30 L 95 4 90.500 4 L 86 4 86 30 M 24 55.557 L 24 82.115 28.250 81.807 L 32.500 81.500 32.767 55.250 L 33.033 29 28.517 29 L 24 29 24 55.557 M 65.233 55.250 L 65.500 81.500 69.750 81.807 L 74 82.115 74 55.557 L 74 29 69.483 29 L 64.967 29 65.233 55.250 M 45 79.500 L 45 106 49 106 L 53 106 53 79.500 L 53 53 49 53 L 45 53 45 79.500'
          stroke='none' fill={isDarkMode ? '#765de6' : '#765de6'} fillRule='evenodd' />
      </svg>
    </MainLogoWrapper>
  )
}

MainLogo.propTypes = {}

export default MainLogo