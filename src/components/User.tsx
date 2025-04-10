export interface UserProps {
  id?: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

const User = ({ name, email }: UserProps) => {
  return (
    <div>
      {name} - {email}
    </div>
  );
};

export default User;
