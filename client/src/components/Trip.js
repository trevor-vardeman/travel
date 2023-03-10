import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useUserContext } from '../context/UserContext'
import { useTripContext } from '../context/CurrentTripContext'
import TripName from './TripName'
import TripData from './TripData'
import TripSummary from './TripSummary'
import TripButtons from './TripButtons'
import TripAddCity from './TripAddCity'
import TripAddTransportation from './TripAddTransportation'
import TripAddAccommodation from './TripAddAccommodation'
import TripAddActivity from './TripAddActivity'
import Stack from 'react-bootstrap/Stack'
import Spinner from 'react-bootstrap/Spinner'

function Trip() {
  const user = useUserContext()
  const { currentTrip, setCurrentTrip } = useTripContext()
  const { id } = useParams()
  const intId = parseInt(id)

  useEffect(() => {
    if (!currentTrip && user) {
      setCurrentTrip(user.trips.filter(trip => intId === trip.id)[0])
    }
  },[intId, user, currentTrip, setCurrentTrip])

  if (!user && !currentTrip) {
    return (
      <Spinner className="definite-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (user && currentTrip && currentTrip.plan === true) {
    return (
      <Stack className="trip">
        <TripName />
        <TripData />
        <TripSummary />
      </Stack>
    )
  } else {
    return (
      <Stack className="trip">
        <TripName />
          <Stack className="centered margin-bottom" direction="horizontal">
            <TripAddCity />
            <TripAddTransportation />
            <TripAddAccommodation />
            <TripAddActivity />
          </Stack>
          <Stack>
            <TripData />
            <TripSummary />
            <TripButtons />
          </Stack>
      </Stack>
    )
  }
}

export default Trip