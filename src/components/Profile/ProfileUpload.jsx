import { useProfile } from "../../context/ProfileContext";

const ProfileUpload = () => {
  const { profile, updateProfile } = useProfile();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        updateProfile({ image: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-40 h-40 mt-8">
        <img
          src={profile.image || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-2 border-[#1A91F0]"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="fileInput"
        />

        <label
          htmlFor="fileInput"
          className="absolute bottom-2 right-2 bg-[#1A91F0] text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-[#0f6bbf] transition duration-200"
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M3 17.25V21h3.75l11.11-11.11-3.75-3.75L3 17.25zM21.41 6.34a1.5 1.5 0 0 0 0-2.12l-2.12-2.12a1.5 1.5 0 0 0-2.12 0L15 3.41l3.75 3.75 2.66-2.82z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default ProfileUpload;
