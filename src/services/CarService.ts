import axios from "axios";
import { API_URL, API_ROUTE_NAMES } from "../appConstant";
import type { Car } from "../types/Cars";
import type { CarService } from "../types/CarService";
import type { RentalStation } from "../types/RentalStation";
import type {
  BookingOrderResponse,
  BookingOrderPayload,
  VerifyServiceBookingPayload,
  VerifyServiceBookingResponse,
} from "../types/commonTypes";
import type {
  AutoRentalPayload,
  AutoRentalResponse,
} from "../types/AutoRental";
import type { GetInTouchPayload, GetInTouchResponse } from "../types/Contact";

type QueryParams = Record<string, string | number | boolean>;

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const {
  CARS,
  SERVICES,
  CREATE_BOOKING,
  VERIFY_PAYMENT,
  GET_BOOKING_RECEIPT,
  RENTAL_STATIONS,
  CREATE_AUTO_RENTAL,
  SEND_GET_IN_TOUCH_MESSAGE,
} = API_ROUTE_NAMES;

/**
 * Fetches a list of all cars.
 * @returns A promise that resolves to an array of Car objects.
 */
const getAllCars = async (params?: QueryParams): Promise<Car[]> => {
  try {
    const response = await apiClient.get<Car[]>(`/${CARS}`, { params });
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
const getCarDetails = async (id: string): Promise<Car> => {
  try {
    const response = await apiClient.get<Car>(`/${CARS}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Car details with id: ${id}`, error);
    throw new Error("Failed to fetch Car details");
  }
};

/**
 * Fetches a list of all car services.
 * @returns A promise that resolves to an array of Car Service objects.
 */
const getAllCarServices = async (
  params?: QueryParams
): Promise<CarService[]> => {
  try {
    const response = await apiClient.get<CarService[]>(`/${SERVICES}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all Car Services:", error);
    throw new Error("Failed to fetch Car Services.");
  }
};

/**
 * Fetches particular car service details.
 * @returns A promise that resolves to an Car Service object.
 */
const getCarServiceDetails = async (id: string): Promise<CarService> => {
  try {
    const response = await apiClient.get<CarService>(`/${SERVICES}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Car Service details with id: ${id}`, error);
    throw new Error("Failed to fetch Car Service details");
  }
};

/**
 * Creates an order for booking a car service.
 * @returns A promise that resolves to a Booking Order object.
 */
const createServiceBookingOrder = async (
  payload: BookingOrderPayload
): Promise<BookingOrderResponse> => {
  try {
    const response = await apiClient.post<BookingOrderResponse>(
      `/${CREATE_BOOKING}`,
      { ...payload }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order.");
  }
};

/**
 * Verifies payment status of the order for service booked.
 * @returns A promise that resolves to a Booking Order object.
 */
const verifyServiceBookingPayment = async (
  payload: VerifyServiceBookingPayload
): Promise<VerifyServiceBookingResponse> => {
  try {
    const response = await apiClient.patch<VerifyServiceBookingResponse>(
      `/${VERIFY_PAYMENT}`,
      { ...payload }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order.");
  }
};

/**
 * Fetches a PDF receipt of the Booking Order
 * @returns A promise that resolves to a PDF of the Booking Order.
 */
const getServiceBookingReceipt = async (orderId: string): Promise<Blob> => {
  try {
    const response = await apiClient.get(`/${GET_BOOKING_RECEIPT}/${orderId}`, {
      responseType: "blob", // PDF/binary
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching booking receipt:", error);
    throw new Error("Failed to fetch booking receipt.");
  }
};

/**
 * Fetches a list of all rental stations.
 * @returns A promise that resolves to an array of Rental Station objects.
 */
const getAllRentalStations = async (
  params?: QueryParams
): Promise<RentalStation[]> => {
  try {
    const response = await apiClient.get<RentalStation[]>(
      `/${RENTAL_STATIONS}`,
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all Rental Stations:", error);
    throw new Error("Failed to fetch Rental Stations.");
  }
};

/**
 * Creates an order for auto rental car service.
 * @returns A promise that resolves to a Auto Rental object.
 */
const createAutoRentalBookingOrder = async (
  payload: AutoRentalPayload
): Promise<AutoRentalResponse> => {
  try {
    const response = await apiClient.post<AutoRentalResponse>(
      `/${CREATE_AUTO_RENTAL}`,
      { ...payload }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating auto rental order:", error);
    throw new Error("Failed to create auto rental order.");
  }
};

/**
 * Sends a message to get in touch.
 * @returns A promise that resolves to a Get In touch message object.
 */
const sendGetInTouchMessage = async (
  payload: GetInTouchPayload
): Promise<GetInTouchResponse> => {
  try {
    const response = await apiClient.post<GetInTouchResponse>(
      `/${SEND_GET_IN_TOUCH_MESSAGE}`,
      { ...payload }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message.");
  }
};

export const carService = {
  getAllCars,
  getCarDetails,
  getAllCarServices,
  getCarServiceDetails,
  createServiceBookingOrder,
  verifyServiceBookingPayment,
  getServiceBookingReceipt,
  getAllRentalStations,
  createAutoRentalBookingOrder,
  sendGetInTouchMessage,
};
