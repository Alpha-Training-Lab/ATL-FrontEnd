const KYCStepOne = ({ formData, setFormData, nextStep }) => {
    return (
      <div className="flex flex-col gap-4">
        <div>
            <h2 className="text-xl font-bold">Email Address</h2>
            <input type="email" placeholder="Enter your email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="p-[10px] border rounded-[10px]"/>
        </div>
        <div>
            <h2 className="text-xl font-bold">Password</h2>
            <input type="password" placeholder="Create a password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="p-[10px] border rounded-[10px]"/>
        </div>
        <button onClick={nextStep} className="p-2 bg-primary text-white rounded">
          Next
        </button>
      </div>
    );
  };
  
  export default KYCStepOne;  