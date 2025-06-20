import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    paperId: "",
    paperTitle: "",
    email: "",
    phone: "",
    paymentId: "",
    amountPaid: "",
    type: "",
  });

  const [proofImage, setProofImage] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amountPaid" || name === "phone" ? Number(value) : value,
    }));
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "payment_proof");
    formData.append("cloud_name", "ddtatnwwv");

    const response = await fetch("https://api.cloudinary.com/v1_1/ddtatnwwv/image/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      let imageUrl = "";
      if (proofImage) {
        const uploadRes = await uploadToCloudinary(proofImage);
        imageUrl = uploadRes.secure_url;
      }

      const payload = {
        ...formData,
        proofImage: imageUrl,
      };

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Registration submitted successfully!");
        setFormData({
          name: "",
          affiliation: "",
          paperId: "",
          paperTitle: "",
          email: "",
          phone: "",
          paymentId: "",
          amountPaid: "",
          type: "",
        });
        setProofImage(null);
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Name", name: "name" },
          { label: "Affiliation", name: "affiliation" },
          { label: "Paper ID", name: "paperId" },
          { label: "Title of Paper", name: "paperTitle" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone No", name: "phone", type: "number" },
          { label: "Payment ID", name: "paymentId" },
          { label: "Amount Paid", name: "amountPaid", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded shadow-sm"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded shadow-sm"
          >
            <option value="">Select Type</option>
            <option value="Student">Student / Research Scholar</option>
            <option value="Industry">Industry Person</option>
            <option value="Academician">Academician / Faculty</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Payment Proof</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProofImage(e.target.files[0])}
            required
            className="w-full border px-4 py-2 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Submit
        </button>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
