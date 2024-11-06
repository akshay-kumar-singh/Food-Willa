import React from "react";
import { GITHUB_USER } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Dummy",
            bio: "Default",
            location: "Default",
            image: "",
        };
    }

    async componentDidMount() {
        const fetchData = await fetch(GITHUB_USER);
        const data = await fetchData.json();

        this.setState({
            name: data.name || "Akshay Kumar Singh", // Default if API doesn't provide name
            bio: data.bio || "Default Bio",
            location: data.location || "Chennai, India",
            image: data.avatar_url || "", // Default if API doesn't provide image
        });
    }

    render() {
        const { name, image, bio, location } = this.state;

        return (
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-8 text-center">
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-32 mx-auto rounded-full shadow-md"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-800">Name: {name}</h2>
                <p className="mt-2 text-gray-600">Bio: {bio}</p>
                <h3 className="mt-2 text-gray-500">Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;
