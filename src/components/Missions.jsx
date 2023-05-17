import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchMissions from '../API/apiMissions';

const Missions = () => {
  const { missions, loading } = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === false) dispatch(fetchMissions());
  }, [dispatch, loading]);

  if (loading) {
    <div>
      <h1>Loading...</h1>
    </div>;
  }

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
          <tr>
            {missions.map((mission) => {
              const {
                mission_id: id,
                mission_name: name,
                description,
              } = mission;

              return (
                <div key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>
                    <button type="button">Not a member</button>
                  </td>
                  <td>
                    <button type="button">Join mission</button>
                  </td>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
