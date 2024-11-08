import rolesRaw from "../data/roles.json";
const roles = rolesRaw as string[]


interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  console.log(roles);
  console.log(role);
  console.log(roles.indexOf(role));
  console.log(activities.indexOf(activity));
  return roles.indexOf(role) >= activities.indexOf(activity)
};

export default useIsVerified;
