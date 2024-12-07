import ResultImage from "../../../assets/images/result/1.png";

export default function Results() {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                Hasil Mesin
            </h1>
            <div className="mt-4">
                <img src={ResultImage} alt="hasil mesin" />
            </div>
        </div>
    );
}