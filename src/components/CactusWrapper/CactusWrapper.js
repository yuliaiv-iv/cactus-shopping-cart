import './CactusWrapper.css';

const CactusWrapper = props => {
  return <div className='wrapper'>{props.children}</div>
};

export default CactusWrapper;