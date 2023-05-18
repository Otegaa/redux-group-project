import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { joinMission } from '../features/MissionsSlice';
import fetchMissions from '../API/apiMissions';

const Missions = () => {
  const { missions, loading } = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === false) dispatch(fetchMissions());
  }, [dispatch, loading]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>

          {missions.map((mission) => {
            const { mission_id: id, mission_name: name, description } = mission;
            // console.log(id);

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <button type="button">
                    {mission.reserved ? 'Active member' : 'Not a member'}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      console.log(id);
                      dispatch(joinMission(id));
                    }}
                  >
                    {mission.reserved ? 'Leave mission' : 'Join mission'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
