import React, { useState } from 'react';
import { X, Calendar, Users, Clock, MapPin, Sparkles, CheckCircle2, Coffee } from 'lucide-react';
import { ReservationPayload } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDrinkChoice?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialDrinkChoice,
}) => {
  const [formData, setFormData] = useState<ReservationPayload>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '09:00 AM – Morning Dial-In',
    seatingArea: 'terrace-patio',
    specialNotes: initialDrinkChoice ? `Interested in trying: ${initialDrinkChoice}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const timeSlots = [
    '08:00 AM – Early Dawn Pour-Over',
    '09:30 AM – Morning Dial-In & Sourdough',
    '11:00 AM – Mid-Morning Tasting Flight',
    '02:30 PM – Quiet Roastery Hours',
    '04:30 PM – Sunset Cold Drip Session',
    '07:00 PM – Evening Velvet & Espresso',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate network confirmation
    setTimeout(() => {
      const code = `EO-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
    }, 800);
  };

  const handleResetAndClose = () => {
    setConfirmationCode(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: new Date().toISOString().split('T')[0],
      timeSlot: '09:00 AM – Morning Dial-In',
      seatingArea: 'terrace-patio',
      specialNotes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div className="bg-cream-50 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-cream-300 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-200/60 hover:bg-cream-200 text-espresso-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmationCode ? (
          // Confirmation View
          <div className="text-center py-6 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-olive-700 font-bold">
                Table Reserved
              </span>
              <h3 className="font-serif text-3xl font-bold text-espresso-950">
                We Await Your Visit
              </h3>
              <p className="text-xs sm:text-sm text-espresso-600 max-w-md mx-auto">
                Your reservation at Ember &amp; Oak Coffee House, Indiranagar has been confirmed. A confirmation summary has been logged.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="p-5 rounded-2xl bg-cream-100 border border-cream-300/80 text-left space-y-3 font-mono text-xs text-espresso-800">
              <div className="flex justify-between border-b border-cream-200 pb-2">
                <span className="text-espresso-500 uppercase">Confirmation Reference</span>
                <span className="font-bold text-terracotta-700 text-sm">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso-500">Guest Name</span>
                <span className="font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso-500">Party Size</span>
                <span>{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso-500">Date &amp; Slot</span>
                <span>{formData.date} · {formData.timeSlot.split('–')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso-500">Seating Area</span>
                <span className="capitalize">{formData.seatingArea.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between border-t border-cream-200 pt-2 text-[11px] text-espresso-500 font-sans">
                <span>Location: 142, 12th Main Rd, Indiranagar</span>
                <span>Held for 15 mins</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Done &amp; Return to Website
            </button>
          </div>
        ) : (
          // Form View
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Slow Coffee Experience</span>
              </div>
              <h3 id="reservation-title" className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                Reserve a Table or Flight
              </h3>
              <p className="text-xs text-espresso-600">
                Book a tranquil corner table, garden patio space, or front-row seats at the slow pour-over bar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-espresso-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Rao"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-espresso-900">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ananya@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
                {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-espresso-900">
                  Phone (+91) *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
                {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
              </div>

              {/* Guests */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-espresso-900 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-espresso-500" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest (Solo Coffee & Work)' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-espresso-900 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-espresso-500" />
                  <span>Reservation Date</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-espresso-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-espresso-500" />
                  <span>Preferred Time Window</span>
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seating Area */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-espresso-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-espresso-500" />
                  <span>Seating Atmosphere</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'terrace-patio', title: 'Garden Patio', desc: 'Pet-friendly, leafy' },
                    { id: 'slow-coffee-bar', title: 'Pour-Over Bar', desc: 'Barista interaction' },
                    { id: 'oak-communal-table', title: 'Oak Library', desc: 'Quiet, power sockets' },
                  ].map((seat) => (
                    <button
                      type="button"
                      key={seat.id}
                      onClick={() => setFormData({ ...formData, seatingArea: seat.id as any })}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                        formData.seatingArea === seat.id
                          ? 'border-terracotta-500 bg-terracotta-50 text-espresso-950 font-medium'
                          : 'border-cream-300 bg-cream-100/60 text-espresso-700 hover:bg-cream-100'
                      }`}
                    >
                      <p className="font-semibold text-[11px]">{seat.title}</p>
                      <p className="text-[10px] text-espresso-500 leading-tight">{seat.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-espresso-900">
                  Special Notes or Tasting Requests (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  placeholder="e.g. Oat milk preference, bringing dog, celebrating an anniversary"
                  className="w-full px-3.5 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Coffee className="w-4 h-4 text-terracotta-300" />
                    <span>Confirm Table Reservation</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-espresso-500 mt-2">
                No cancellation fees. We hold tables for up to 15 minutes past the slot.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
