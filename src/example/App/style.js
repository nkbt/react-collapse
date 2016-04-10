export const container = {
  maxWidth: 800,
  border: '1px solid rgba(3, 169, 244, 0.3)',
  borderRadius: 10
};


export const config = {
  paddingBottom: 20
};


export const label = {
  paddingRight: 20
};


export const input = {
  marginLeft: 10,
  marginRight: 10,
  verticalAlign: 'middle'
};


export const getContent = height => ({
  height,
  background: 'rgba(96, 125, 139, 0.6)',
  borderRadius: height / 2
});
