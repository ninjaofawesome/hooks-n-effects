export const sizes = {
	xsmall: '5px',
	small: '10px',
	medium: '20px',
	large: '40px',
	xlarge: '80px',
};

// roughly modeled around the iphone sizes, but more could be added here.
const deviceSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`
};

export const colors = {
	black: '#141414',
	white: '#ffffff',
	borderGray: '#e7e7e7',
	green: '#34df6b',
	red: '#d42828',
	ltNavy: '#2a3151',
	dkNavy: '#0c122f',  
};