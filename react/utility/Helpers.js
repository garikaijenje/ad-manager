export const isEmpty = (val) => {
  return (val == '' || val == null) ? true : false;
}

export const isObjectEmpty = (obj) => {
  for (var prop in obj) {
    return false;
  }
  return true;
}

export const DisplayFormikState = (props) => {
  return (
    <>
      <div style={{ margin: '1rem 0', background: '#f6f8fa', padding: '.5rem' }}>
        <p style={{ marginBottom: 10, fontWeight: 'bold' }}>Injected Formik props (the form's state)</p>
        <div style={{}}>
          <code>touched:</code> {JSON.stringify(props.touched, null, 2)}
        </div>
        <br />
        <div>
          <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
        </div>
        <br />
        <div>
          <code>values:</code> {JSON.stringify(props.values, null, 2)}
        </div>
        <br />
        <div>
          <code>isSubmitting:</code> {JSON.stringify(props.isSubmitting, null, 2)}
        </div>
      </div>
    </>
  );
};