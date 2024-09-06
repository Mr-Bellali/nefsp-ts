import bcrypt from 'bcrypt';

const comparePasswords = async (inputPassword: string, storedHash: string): Promise<boolean> => {
  console.log("in the compare function:",inputPassword,"/n",storedHash)
  
  if (!inputPassword || !storedHash) {
    throw new Error('Password or hash is undefined');
  }

  return await bcrypt.compare(inputPassword, storedHash);
};
export default comparePasswords