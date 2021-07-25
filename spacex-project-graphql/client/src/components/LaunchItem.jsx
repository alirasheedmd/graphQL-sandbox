export const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div className="py-3">
      <h4>Mission Name: {mission_name}</h4>
      <h4>Flight Number: {flight_number}</h4>
      <h4>Launch Date: {launch_date_local.substring(0, 10)}</h4>
      {launch_success ? (
        <h4> Launch Status: Success</h4>
      ) : (
        <h4> Launch Status: Failed</h4>
      )}
    </div>
  )
}
