import './index.css'

const Subscribed = props => {
  const {subscribed} = props
  return (
    <button type="submit" className="subscribed-button" onClick={subscribed}>
      Subscribed
    </button>
  )
}
export default Subscribed