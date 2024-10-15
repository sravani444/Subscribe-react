import './index.css'

const Subscribe = props => {
  const {subscribe} = props
  return (
    <button type="submit" className="subscribe-button" onClick={subscribe}>
      Subscribe
    </button>
  )
}
export default Subscribe