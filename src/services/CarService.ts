import axios from "axios";
import { API_URL, API_ROUTE_NAMES } from "../appConstant";
import type { Car } from "../types/Cars";

type QueryParams = Record<string, string | number | boolean>;

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const { CARS } = API_ROUTE_NAMES;

/**
 * Fetches a list of all cars.
 * @returns A promise that resolves to an array of Car objects.
 */
const getAllCars = async (
  params?: QueryParams
): Promise<Car[]> => {
  try {
    const response = await apiClient.get<Car[]>(
      `/${CARS}`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all Cars:", error);
    throw new Error("Failed to fetch Cars.");
  }
};

/**
 * Fetches particular car details.
 * @returns A promise that resolves to an Car object.
 */
const getCarDetails = async (
  id: string
): Promise<Car> => {
  try {
    const response = await apiClient.get<Car>(
      `/${CARS}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching Car details with id: ${id}`, error);
    throw new Error("Failed to fetch Car details");
  }
};

export const carService = {
    getAllCars,
    getCarDetails
}