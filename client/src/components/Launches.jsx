import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import { LaunchItem } from "../components/LaunchItem.jsx"

const LAUNCH_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY)
  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      )}
    </div>
  )
}

export default Launches
