const stylesLogin = {
  content: ({ backgroundColor = 'white' }) => ({
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }),
  image: {
    width: '40vh',
    height: '20vh'
  },
  card: {
    width: 300,
    borderRadius: 10
    // boxShadow: `0px 1px 10px ${COLORS.boxShadow}`,
  },
  button: {
    height: 40,
    width: '100%'
  },
  form: {
    alignItems: 'center',
    borderRadius: 10,
    width: '40vh'
  }
}

export default stylesLogin
